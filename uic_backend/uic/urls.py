# This is uic app's urls.py file

from . import views
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("events", views.EventViewSet, "events")

urlpatterns = router.urls
