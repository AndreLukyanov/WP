<?php get_header(); 
$the_id = get_the_ID();?>

<section class="masked masked_transparent masked_page">
	<div class="container">
		<h1><?php the_title();?></h1>
	</div>
</section>

<main class="single">
	<div class="single__body">
		<div class="single__content">
			<article class="article article_full">
				<div class="article__image animated-loader">
					<img src="<?php the_post_thumbnail_url('blog_full');?>" alt="<?php the_title();?>" class="load-image">
					<time datetime="<?php echo get_the_date('Y.m.d');?>" class="article__date"><?php echo get_the_date('d M Y');?></time>
				</div>

				<div class="article__info">
					<h2><?php the_title();?></h2>
					<span class="article__category">Категория: <?php the_category(', ');?></span>
					<div class="article__text">
						<?php the_content();?>
					</div>
				</div>

				<nav class="more-posts">
					<!-- Выводим "следующий" или "предыдущий" посты -->
					<span class="more-posts__title">Читайте также:</span>
					<?php $prevPost = get_previous_post(true);
					if($prevPost) {?>
					<div class="more-posts__box more-posts__box_previous">
						<?php $prevthumbnail = get_the_post_thumbnail($prevPost->ID, 'blog_small' );?>
						<?php previous_post_link('%link',"$prevthumbnail  <h5>%title</h5>", TRUE); ?>
					</div>
					<?php } $nextPost = get_next_post(true);
					if($nextPost) { ?>
					<div class="more-posts__box more-posts__box_next">
						<?php $nextthumbnail = get_the_post_thumbnail($nextPost->ID, 'blog_small' ); ?>
						<?php next_post_link('%link',"$nextthumbnail  <h5>%title</h5>", TRUE); ?>
					</div>
					<?php } ?>
				</nav>

			</article>

		</div>

		<!-- Если нужен, то выводим сайдбар -->
		<?php get_sidebar(); ?> 

	</div>
</main>



<?php get_footer(); ?>