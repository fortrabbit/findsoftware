# PHP frameworks, PHP SSGs and admin panels: research notes

Swept 2026-10-18. 136 candidates: 57 accepted, 51 rejected, 28 boundary. Facts from the GitHub API, Packagist, wordpress.org and drupal.org APIs and nova.laravel.com.

## Discovery sources

| Source | Names in area |
|---|---|
| frbit-specs `software/` | 11 (Laravel, Symfony, CakePHP, CodeIgniter, Yii, Leaf, Tempest, Jigsaw, Hyde, Filament, Twill) |
| awesome-php: Frameworks, Framework Extras, Micro Frameworks, Static Site Generators | 27 |
| GitHub topic searches (php-framework, framework, static-site-generator, admin-panel, microframework; >300 stars) | about 45 new |
| GitHub keyword searches (laravel admin panel, symfony admin, php swoole/mvc/micro framework, php static site generator; >400 stars) | about 30 new |
| Packagist tag searches (framework, static-site-generator, static site, admin-panel, microframework; top 60 each) | about 20 new; most hits are plugins or libraries |
| jamstack.org generators, language PHP | 28, of which 14 new |

Discovery cut-offs only: GitHub above 300 or 400 stars, Packagist top 60 per tag. Plugins, libraries and tutorial repos got no row. CMSs and e-commerce belong to other areas.

## Recurring facts

- Runtime model: PHP-FPM vs long-running (Swoole, Workerman, RoadRunner); about ten need a persistent process
- C extension vs Composer package (Phalcon, Yaf): needs a PHP extension on the host
- Distribution: Composer, phar (Cecil), GitHub release only (LavaLust, Biny, Marko), PECL
- Skeleton repo next to the framework repo (laravel/laravel, yiisoft/app): two download figures
- LTS and support windows; the release newest by date can be an LTS patch (Symfony 5.4)
- Templating: Blade, Twig, Latte, plain PHP; SSG content format and output folder
- Docs language other than English (ThinkPHP, PhalApi, HLEB, webman)
- Paid editions: Laravel Nova (99 and 299 USD); not checked for the others

## Surprises

- Most PHP SSGs fail criterion 4. Live ones: Jigsaw, Hyde, Sculpin, Cecil, Daux, plus projects under 30 stars
- Admin panels are Composer packages, like Livewire and Inertia: the library line in the scope doc decides about 14 boundary rows
- Static export plugins for CMSs (Simply Static 30000+ installs, Staatic, Tome, Statamic SSG) are a category of their own
- Stars and downloads disagree a lot: CodeIgniter 3 has 18k stars and is dead; Laminas MVC has 174 stars and 27.8M downloads. One adoption figure won't do as a threshold
- Lumen, Laminas MVC and Framework X drop out of the 24-month window within months: criterion 4 needs re-checking on a schedule
