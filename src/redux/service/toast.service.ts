import "../../components/_layouts/styles/iziToastStyle.css";
import iziToast from "izitoast";

export const ToastSuccess = (message: string) => 
{
	iziToast.show({
        title: "Success",
        icon: "ico-success",
        message: message,
        iconColor: "rgb(0, 255, 184)",
        theme: "dark",
        progressBarColor: "rgb(0, 255, 184)",
        position: "topCenter",
        transitionIn: "bounceInDown",
        transitionOut: "fadeOut",
        timeout: 7000
    });
}

export const ToastDanger = (message: string) => 
{
    if(Array.isArray(message))
    {
        for(let i = 0; i < message.length; i++)
        {
            iziToast.error({
                title: "Error",
                icon: "ico-error",
                position: "topCenter",
                transitionIn: "bounceInDown",
                message: message[i],
                timeout: 7000
            });
        }
    }
    else
    {
        iziToast.error({
            title: "Error",
            icon: "ico-error",
            message: message,
            position: "topCenter",
            transitionIn: "bounceInDown",
            timeout: 7000
        });
    }
}

export const ToastWarning = (message: string) => 
{
    iziToast.warning({
        title: "Warning",
        icon: "ico-warning",
        position: "topCenter",
        transitionIn: "bounceInDown",
        message: message,
    });
}

