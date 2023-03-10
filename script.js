function toast({
    title= '',
    message= '',
    type= 'info',
    duration= 4000,
}){
  const main = document.getElementById('toast');
  if(main){
    const toast=document.createElement('div');
    toast.classList.add('toast', `toast--${type}`);
    
    const icons = {
      success: 'check_circle',
      info: '',
      warning: 'warning',
      error: 'error',
    };
    
    const icon = icons[type];
    
    const delay = (duration/1000).toFixed(2);
    toast.style.animation=`sliderInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
    
    const autoRemove = setTimeout( function(){
        main.removeChild(toast);
        clearTimeout(autoRemove);
      }, duration);
    
    toast.onclick = function(e){
      if(e.target.closest('.toast--meassage-close')){
        main.removeChild(toast);
      }
    }
    
    toast.innerHTML =`
    <div class="toast--icon">
      <span class="toast--icon-color material-symbols-outlined">${icon}</span>
      
    </div>
    <div class="toast--body">
      <h3 class="toast--title">${title}</h3>
      <p class="toast--content">${message}</p>
    </div>
    <div class="toast--meassage">
      <span class="toast--meassage-close material-symbols-outlined">close</span>
    </div>`
      main.appendChild(toast);
      
  }

}
  


function showSuccessToast()
{
  toast({
    title: 'Thành công',
    message: 'Bạn đã đăng ký tài khoản thành công',
    type: 'success',
    duration: 4000,
  });
}

function showErrorToast()
{
  toast({
    title: 'Thất bại',
    message: 'Đã có lỗi xảy ra, xin hãy kiểm tra lại!',
    type: 'error',
    duration: 4000,
  });
}