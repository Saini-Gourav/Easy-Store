import Swal from "sweetalert2";

 const alertMsg = {
    sweetalert: {toast,confirm}
}

export function toast(title, icon = "success"){
    Swal.fire({
        title:title,
        // text: text,
        icon: icon,
        toast: true,
        timerProgressBar: true,
        showConfirmButton: false,
        position: "top-end",
        timer: 3000,
        heightAuto: "false",
        height: "100px",
    })
}

export function confirm(
    title,
    text,
    icon = "warning",
    cancelButton = true,
    confirmButtonText = "Yes, delete it."
  ) {
    return Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonText: confirmButtonText,
      showConfirmButton: true,
      showCancelButton: cancelButton,
      cancelButtonColor: "#d33",
      confirmButtonColor: "#3085d6",
    }).then((result)=>{
        if(result.isConfirmed){
            Swal.fire("Deleted!","Your record has been deleted.","success")
        }
    })
  }

export default alertMsg;