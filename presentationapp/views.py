import re

from django.contrib import messages
from django.core.exceptions import ValidationError
from django.shortcuts import render, redirect

# Create your views here.

# Create your views here
from django.urls import reverse
from django.views.generic import DetailView, CreateView
from django.views.generic.edit import FormMixin

from presentationapp.forms import PresentationApplyForm
from presentationapp.models import Presentation, PresentationApply


class PresentationDetailView(DetailView, FormMixin):
    template_name = 'presentationapp/presentation_detail.html'
    model = Presentation
    context_object_name = 'target_presentation'
    form_class = PresentationApplyForm

class PresentationApplyView(CreateView):
    model = PresentationApply
    template_name = 'presentationapp/presentation_apply_create.html'
    form_class = PresentationApplyForm

    def form_valid(self, form):
        REGEX_PHONE_NUMBER = r'^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$'
        if not re.match(REGEX_PHONE_NUMBER, self.request.POST['phone_num']):
            messages.error(self.request, '전회번호 양식이 맞지 않습니다.')
            return redirect('presentations:presentationdetail', self.request.POST['presentation_pk'])
        phone_num = re.sub(r"[^0-9]","",self.request.POST['phone_num'])
        # request로 받은 번호값이 이미 등록된 번호
        if PresentationApply.objects.filter(presentation_id=self.request.POST['presentation_pk'], phone_num=phone_num).exists():
            messages.error(self.request, '해당 휴대폰번호로 이미 예약이 등록되어 있습니다')
            return redirect('presentations:presentationdetail',self.request.POST['presentation_pk'])
        else:
            temp_apply = form.save(commit=False)
            temp_apply.phone_num = phone_num
            temp_apply.presentation = Presentation.objects.get(pk=self.request.POST['presentation_pk'])
            temp_apply.save()
            return super().form_valid(form)

    def get_success_url(self):
        messages.success(self.request, "예약이 성공적으로 등록되었습니다.")
        return reverse('presentations:presentationdetail',kwargs={'pk':self.object.presentation.pk})

def presentationcheckview(request):
    if request.method == 'GET':
        phone_num = re.sub(r"[^0-9]","",request.GET['phone_num'])
        if PresentationApply.objects.filter(presentation_id=request.GET['presentation_pk'], phone_num = phone_num).exists():
            messages.success(request, '이미 예약이 등록되어 있습니다.')
        else:
            messages.info(request, '예약이 등록되어 있지 않습니다')
        return redirect('presentations:presentationdetail', request.GET['presentation_pk'])
