<?php get_header();
$the_id = get_the_ID(); // позволяет выводить ID страницы с помощью одной переменной
$temp = get_template_directory_uri();  // позволяет выводить путь к шаблону с помощью одной переменной
?>    

<div class="container">
	<h1><?php single_cat_title(); //выводим заголовок категории на странице ?></h1>
</div>
<main class="articles">
	<div class="articles__body">
		<?php // начинаем цикл для вывода статей
		if ( have_posts() ) : ; while ( have_posts() ) : the_post(); $the_id = get_the_ID();?> 
		<article class="article">
			<div class="article__image animated-loader">

				<!-- Выводим изображение статьи в ссылке -->
				<a href="<?php echo get_permalink();?>">
					<img src="<?php the_post_thumbnail_url('blog');?>" alt="<?php the_title();?>">
				</a>

				<!-- Выводим дату статьи ниже -->
				<time datetime="<?php echo get_the_date('Y.m.d');?>" class="article__date"><?php echo get_the_date('d M Y');?></time>
			</div>
			<div class="article__info">

				<!-- Выводим заголовок статьи в ссылке -->
				<a href="<?php echo get_permalink();?>"><h3><?php the_title();?></h3></a>

				<!-- Выводим категории статьи -->
				<span class="article__category">Категория: <?php the_category(', ');?></span>
				<div class="article__text">

					<!-- Выводим краткое описание статьи в ссылке -->
					<?php the_excerpt();?>
				</div>
				<a href="<?php echo get_permalink();?>" class="article__button">Читать далее</a>
			</div>
		</article>
	<?php endwhile; else: ?>
	<div class="category__nothing">Извините, пока ничего не найдено.</div>
<?php endif; ;?>

</div>
</main>

<!-- Вот самые используемые штуки из цикла вордпресс -->
<?php if ( have_posts() ) : query_posts( 'cat=13&posts_per_page=3' ); while ( have_posts() ) : the_post(); ?>
….
<?php the_title();?>
				<?php the_post_thumbnail( 'simple—small' );?>
				<?php the_post_thumbnail_url('home');?>
				<?php the_content();?>
				<?php the_tags('', ', ', '');?>
				<?php the_category(', ');?>
				<?php echo get_the_date('j / n / Y');?>
				<?php echo get_permalink();?>
….
		<?php endwhile; else: ?>
		<div class="category__nothing">Извините, пока ничего не найдено.</div>
	<?php endif; wp_reset_query();?>

<?php get_footer(); ?>