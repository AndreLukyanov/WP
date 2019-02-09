<?php
$the_id = get_the_ID(); // позволяет выводить ID страницы с помощью одной переменной
$temp = get_template_directory_uri();  // позволяет выводить путь к шаблону с помощью одной переменной
?>    


<footer class="footer">
    <div class="footer__body">
      <div class="row">
        <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1">
          <a href="#header" class="footer__logo"></a>
        </div>
        <div class="col-xs-12 col-sm-9 col-md-5 col-lg-4">
          <span class="footer__copy">© 2018 <a href="#!" class="footer__link">lskgrad</a> All rights reserved</span>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4">
          <div class="social">
            <a href="#!" class="social__link social__link_facebook"></a>
            <a href="#!" class="social__link social__link_twitter"></a>
            <a href="#!" class="social__link social__link_odnoklassniki"></a>
            <a href="#!" class="social__link social__link_google"></a>
            <a href="#!" class="social__link social__link_youtube"></a>
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-12 col-lg-3">
          <div class="copyright">
            <p>Сайт разработан в студии <a href="https://serg.agency/" target="_blank" title="Разработка сайта" class="copyright__link">Serg.Agency</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>

<!-- Подключаем обязательную часть футера вордпресса -->
<?php wp_footer(); ?>

</body>
</html>