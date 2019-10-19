var viewButton = document.querySelector(".form-view-button");
var modal = document.querySelector(".hostel-search-form");
var checkIn = modal.querySelector("[name=check-in]");
var checkOut = modal.querySelector("[name=check-out]");
var X=0;


viewButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (X>0){
    modal.classList.add("modal-hide");
    X=0;
  }
  else{
    modal.classList.remove("modal-error");
    if(modal.classList.contains("modal-hide")){
      modal.classList.remove("modal-hide");
      modal.classList.add("modal-show");
    }
    else if(modal.classList.contains("modal-show")){
      modal.classList.remove("modal-show");
      modal.classList.add("modal-hide");
    }
  }
  });

modal.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value) {
    evt.preventDefault();
    modal.classList.remove("modal-hide");
    modal.classList.remove("modal-show");
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
    X=X+1;
  }
});