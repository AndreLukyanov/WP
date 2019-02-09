<?php 
$temp = get_template_directory_uri();?>

<!DOCTYPE html>
<html lang="ru">

<head>

	<meta charset="utf-8">

	<title><?php wp_title(''); ?></title>

	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

	<link rel="apple-touch-icon" sizes="57x57" href="<?php echo $temp;?>/img/favicon/">
	<link rel="apple-touch-icon" sizes="60x60" href="<?php echo $temp;?>/img/favicon/">
	<link rel="apple-touch-icon" sizes="72x72" href="<?php echo $temp;?>/img/favicon/">
	<link rel="apple-touch-icon" sizes="76x76" href="<?php echo $temp;?>/img/favicon/">
	<link rel="apple-touch-icon" sizes="114x114" href="<?php echo $temp;?>/img/favicon/">
	<link rel="apple-touch-icon" sizes="120x120" href="<?php echo $temp;?>/img/favicon/">
	<link rel="apple-touch-icon" sizes="144x144" href="<?php echo $temp;?>/img/favicon/">
	<link rel="apple-touch-icon" sizes="152x152" href="<?php echo $temp;?>/img/favicon/">
	<link rel="apple-touch-icon" sizes="180x180" href="<?php echo $temp;?>/img/favicon/">
	<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo $temp;?>/img/favicon/">
	<link rel="icon" type="image/png" sizes="32x32" href="<?php echo $temp;?>/img/favicon/">
	<link rel="icon" type="image/png" sizes="96x96" href="<?php echo $temp;?>/img/favicon/">
	<link rel="icon" type="image/png" sizes="16x16" href="<?php echo $temp;?>/img/favicon/">
	<meta name="msapplication-TileColor" content="#16bdf4">
	<meta name="msapplication-TileImage" content="<?php echo $temp;?>/favicon/">
	<meta name="theme-color" content="#16bdf4">
	<?php wp_head(); ?>
	<!--[if IE]>
<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

</head>

<body>
	<div class="black"></div>
	<header class="header" id="header">
		<div class="nav nav_before">
			<div class="nav__body">
				<div class="row">

					<div class="col-sm-1 col-md-1">

						<div class="header__block">
							<div class="hamburger hamburger--slider">
								<div class="hamburger-box">
									<span class="hamburger-inner"></span>
								</div>
							</div>
						</div>

					</div>
						<!-- Добавляем меню в админку и выводим ее здесь -->
						<?php wp_nav_menu( array('menu' => 'Меню футера', 'container' => '', 'menu_class' => 'footer__list', 'menu_id' => '' )); ?>
					
					<nav class="navigation">
						<ul class="navigation__list">
							<li class="navigation__item"><a href="#section_first" class="navigation__link navigation__link_medium navigation__link_block">Услуги</a></li>
							<li class="navigation__item"><a href="#section_second" class="navigation__link navigation__link_medium navigation__link_block">Цены</a></li>
							<li class="navigation__item"><a href="#section_third" class="navigation__link navigation__link_medium navigation__link_block">Наши работы</a></li>
							<li class="navigation__item"><a href="#section_fifth" class="navigation__link navigation__link_medium navigation__link_block">Нас рекомендуют</a></li>
							<li class="navigation__item"><a href="#section_sixth" class="navigation__link navigation__link_medium navigation__link_block">Задать вопрос</a></li>
							<li class="navigation__item"><a href="#section_seventh" class="navigation__link navigation__link_medium navigation__link_block">Контакты</a></li>
						</ul>
					</nav>
					<div class="col-sm-11 col-md-11">
						<div class="nav__block">
							<a href="index.html" class="logo"></a>
							<span class="name">Строительная компания</span>
							<div class="phone">
								<span class="phone__tel">+38 044 361 02 15</span>
								<span class="phone__tel">+38 050 469 94 24</span>
								<span class="phone__tel">+38 067 231 66 99</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="hero">
			<div class="hero__body">
				<div class="hero__block">
					<div class="row">
						<div class="col-md-12">
							<h1 class="hero__title"><span class="hero__title_big">ремонт офисных</span> <span class="hero__title_small">и торговых помещений</span></h1>
							<span class="button button_hero">Давайте познакомимся</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<form class="header__form" action="mail.php" method="POST" id="header__form">
			<div class="header__width">
				<span class="aircraft"></span>
			</div>
			<div class="header__content">
				<input type="text" placeholder="Ваше имя" class="header__input" name="name" required minlength="3">
				<input type="text" placeholder="Телефон" class="header__input" name="phone" required id="head_phone">
				<button class="button button_header" tupe="submit" name="submit">Перезвоните мне</button>
				<span class="close">Закрыть</span>
			</div>
		</form>
	</header>
	