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
        position: "topRight",
        transitionIn: "bounceInLeft",
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
                position: "topRight",
                transitionIn: "bounceInLeft",
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
            position: "topRight",
            transitionIn: "bounceInLeft",
            timeout: 7000
        });
    }
}

export const ToastWarning = (message: string) => 
{
    iziToast.warning({
        title: "Warning",
        icon: "ico-warning",
        position: "topRight",
        transitionIn: "bounceInLeft",
        message: message,
    });
}



export const ToastQuestion = (message: string, callback: any) => {
    iziToast.question({
        timeout: 20000,
        close: true,
        overlay: true,
        id: 'question',
        zindex: 999,
        title: 'Warning!',
        message: message,
        position: 'center',
        transitionIn: 'fadeInDown',
        buttons: [
            ['<button><b>YES</b></button>', function (instance, toast) {
                callback() // callback function to run if click YES
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }, true],
        ],
        onClosing: function(instance, toast, closedBy){
            console.info('Closing | closedBy: ' + closedBy);
        },
        onClosed: function(instance, toast, closedBy){
            console.info('Closed | closedBy: ' + closedBy);
        }
    });
}