(function(){
  const main=document.querySelector('main.main');
  if(main&&!main.id)main.id='main-content';
  if(!document.querySelector('.ui-skip-link')){
    const skip=document.createElement('a');
    skip.className='ui-skip-link';skip.href='#main-content';skip.textContent='Skip to dashboard';
    document.body.prepend(skip);
  }
  const sync=()=>document.querySelectorAll('.menu button').forEach(button=>{
    if(button.classList.contains('active'))button.setAttribute('aria-current','page');
    else button.removeAttribute('aria-current');
  });
  document.querySelector('.menu')?.addEventListener('click',()=>requestAnimationFrame(sync));
  sync();
})();
