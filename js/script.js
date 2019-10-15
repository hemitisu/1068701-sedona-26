var viewButton=document.querySelector('.form-view-button');
var modal=document.querySelector('.hostel-search-form');


viewButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if(modal.classList.contains("modal-hide")){
    modal.classList.remove("modal-hide");
    modal.classList.add("modal-show");
    }
    else if(modal.classList.contains("modal-show")){
    modal.classList.remove("modal-show");
    modal.classList.add("modal-hide");
    }
  });

