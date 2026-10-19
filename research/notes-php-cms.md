# PHP CMS, blog and e-commerce: candidate sweep

Swept 2026-10-18. 163 candidates: 84 accepted, 31 boundary, 1 hosted service, 47 rejected (all on criterion 4).

## Discovery sources

| Source | Names in scope |
|---|---|
| frbit-specs/software/*.yaml | 13 (rest are frameworks or SSGs) |
| awesome-php, CMS and e-commerce sections | 21 |
| awesome-cms, PHP section | 47 |
| Wikipedia, List of content management systems (PHP rows) | 53 |
| Packagist search, type:project, 7 terms (767 packages) | ~35 new |
| Own knowledge, names only (blogs, Laravel shops, Drupal distributions) | ~30 |

Facts come from GitHub API, Packagist, endoflife.date, drupal.org or project sites.

## Recurring facts beyond the CSV

- Content storage: database (MySQL/PostgreSQL/SQLite) vs flat files (Markdown or YAML in folders) vs both (Statamic)
- Admin UI: built in, none (Pico, Herbie) or headless only (Cockpit)
- Headless API: REST, GraphQL or JSON:API, built in or as a plugin
- Licence model: open source, open core with paid editions, paid per site, source-available
- Underlying framework: Laravel, Symfony, CakePHP, Yii, CodeIgniter, Drupal core
- Install path: Composer, zip upload, Docker, web installer
- Plugin marketplace, often paid
- Templating: Twig, Blade, plain PHP, Smarty, own tags (ExpressionEngine, Textpattern, MODX)
- Forks and lineage: WordPress to ClassicPress, Drupal to Backdrop, October to Winter, Magento to Mage-OS and OpenMage, PrestaShop to thirty bees, OXID to O3-Shop
- Hosting requirements: PHP version, extensions, database, cron or queue worker

## Surprises

- Many products ship as distributions, modules or packages rather than apps: Drupal distributions (6), WooCommerce, Drupal Commerce, Craft Commerce, Laravel packages (Lunar, Vanilo, Shopper, Bazar, Canvas). Needs a rule for products built on products.
- GitHub stars mislead here: WordPress and Drupal stars are read-only mirrors, Magento and Mage-OS packages are off Packagist, SPIP and Drupal CMS live on their own GitLab. drupal.org install counts and WordPress.org stats are better adoption figures.
- Criterion 4 cut 29%. Dead projects keep thousands of stars (Pagekit, Anchor, Pico).
- Release data is uneven: tags only, beta-only lines (Automad), no versions (Datenstrom Yellow), dates only on project sites.
- Large Chinese blog and CMS projects (Typecho 12k stars, Z-BlogPHP, emlog, PbootCMS) are absent from English lists.
- Wikis, LMS and social engines (MediaWiki, Moodle, Elgg) appear in every CMS list. Logged as tier 3 boundary.
- Admin panels (Filament 32k stars, Orchid) are halfway between framework and CMS.
