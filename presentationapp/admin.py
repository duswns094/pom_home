from django.contrib import admin

# Register your models here.
from import_export import resources, fields
from import_export.widgets import ForeignKeyWidget

from presentationapp.models import Presentation, PresentationApply
from import_export.admin import ImportExportMixin, ImportExportModelAdmin


class PresentationAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name', 'is_opened','created_at']
    list_display_links = ['name']

admin.site.register(Presentation, PresentationAdmin)

class PresentationApplyResource(resources.ModelResource):
    presentation = fields.Field(column_name='설명회 이름', attribute='presentation')
    applicant = fields.Field(column_name='예약신청자', attribute='applicant',)
    phone_num = fields.Field(column_name='연락처', attribute='phone_num')

    class Meta:
        model = PresentationApply
        fields = ('presentation', 'applicant', 'phone_num',)
        export_order = ('presentation', 'applicant', 'phone_num',)
        exclude = ('id','created_at')


class PresentationApplyAdmin(ImportExportModelAdmin):
    list_display = ['presentation','applicant','phone_num']
    list_display_links = ['presentation','applicant','phone_num']
    list_filter = ['presentation']
    resource_class = PresentationApplyResource

admin.site.register(PresentationApply, PresentationApplyAdmin)
