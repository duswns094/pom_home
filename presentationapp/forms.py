from django.forms import ModelForm, TextInput

from presentationapp.models import PresentationApply


class PresentationApplyForm(ModelForm):
    class Meta:
        model = PresentationApply
        fields = ['applicant', 'phone_num']
        widgets = {
            'applicant': TextInput(attrs={
                'class': "form-control form-control-user",
                'placeholder': 'ex)홍길동',
            }),
            'phone_num': TextInput(attrs={
                'class': "form-control form-control-user",
                'placeholder': '010-0000-0000',
            }),
        }
        labels = {
            'applicant': '성함:',
            'phone_num': '휴대폰번호:',
        }
