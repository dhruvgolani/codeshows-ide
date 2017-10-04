function p_tab_switch(dif)
{
    var easy = document.getElementById('easy_block');
    var med = document.getElementById('med_block');
    var hard = document.getElementById('hard_block');
    if(dif == 1)
    {
        easy.style.display = 'block';
        med.style.display = 'none';
        hard.style.display = 'none';
    }
    else if(dif==2)
    {
        easy.style.display = 'none';
        med.style.display = 'block';
        hard.style.display = 'none';
    }
    else if(dif==3)
    {
        easy.style.display = 'none';
        med.style.display = 'none';
        hard.style.display = 'block';
    }
}

function c_tab_switch(time)
{
    var present = document.getElementById('present_block');
    var past = document.getElementById('past_block');
    var future = document.getElementById('future_block');
    if(time == 1)
    {
        present.style.display = 'block';
        past.style.display = 'none';
        future.style.display = 'none';
    }
    else if(time==2)
    {
        present.style.display = 'none';
        past.style.display = 'none';
        future.style.display = 'block';
    }
    else if(time == 3)
    {
        present.style.display = 'none';
        past.style.display = 'block';
        future.style.display = 'none';
    }
}

function submit_mode_switch(mode) {
    var editor = document.getElementById('editor_block');
    var file = document.getElementById('file_block');
    if(mode == 1) {
        editor.style.display = 'block';
        file.style.display = 'none';
    }
    else if(mode==2) {
        editor.style.display = 'none';
        file.style.display = 'block';
    }
}