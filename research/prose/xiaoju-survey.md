XIAOJUSURVEY is an open source system for building questionnaires, exams, polls and forms. It has a management console for the surveys and an embeddable survey SDK for web pages, apps and mini programs. The console is a Vue 3 web app and the server is NestJS on MongoDB, as the README says. The system runs from a Docker image, or from source on a server with the web app behind nginx, as the [service deployment guide](https://xiaojusurvey.didi.cn/docs/next/document/%E5%B7%A5%E7%A8%8B%E9%83%A8%E7%BD%B2/%E6%9C%8D%E5%8A%A1%E9%83%A8%E7%BD%B2) describes.

Surveys are built in the console and published through distribution channels, which the [multi-end SDK API](https://xiaojusurvey.didi.cn/docs/next/api/%E5%A4%9A%E7%AB%AFSDK%20API) lists for apps, web pages and mini programs. Responses can be analyzed and exported in the console, and a server API creates and manages the surveys and their channels.

## Worth knowing

The README describes AI-generated surveys, custom hooks that push data and messages to other systems, and multi-role permission management.
