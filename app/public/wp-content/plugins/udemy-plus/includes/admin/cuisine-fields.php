<?php

function up_cuisine_add_form_fields()
{
    ?>
    <div class="form-field">
        <label>
            <?php _e("More Info URL", 'udemy-plus'); ?>
        </label>
        <input type="text" name="up_more_info_url" />
        <p>
            <?php _e('A URL a user can click to learn more', 'udemy-plus') ?>
        </p>
    </div>
    <?php
}