<form role="search" method="get" class="search-form" class="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>">
    <div>

    <label class="search-reader-text" for="s"> Search for:</label>
    <input type="text" value="<?php echo get_search_query(); ?>" name="s" id="s">
    <input type="submit" id="searchsubmit" value="Search">
    </div>
</form>