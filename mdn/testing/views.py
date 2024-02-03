from django.template import loader
from django.http import HttpResponse

# Create your views here.


def test(request):
    template = loader.get_template('testing.html')
    return HttpResponse(template.render())
