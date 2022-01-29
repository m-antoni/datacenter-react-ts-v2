// return the user data from the session storage
export const getUser = () => {
    const userStr = localStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }
  
// return the token from the session storage
export const getToken = () => {
  return localStorage.getItem('token') || null;
}

// remove the token and user from the session storage
export const removeUserSession = () => {
  localStorage.removeItem('token');
}

// set the token and user from the session storage
export const setUserSession = (token : string) => {
  localStorage.setItem('token', token);
}
  

export const capitalizeStr = (type: string, val: any): string => {
  
  // let keyName = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
  // let ValName = key.charAt(0).toUpperCase() + ;
    let arr: any;
    let N_A = "n/a";

    // check if null
    if(val === undefined || val === null || val === ""){
      return N_A;
    }
    
    if(typeof val === "boolean")
    {
        let booleanToString = val.toString();
        return booleanToString === 'true' ? "Yes" : "No";
    }

    if(type === 'k')
    {
      arr = val.replace(/_/g, ' ').split(" ");
    }
    else
    {
      arr = val.split(" ");
    }

    //loop through each element of the array and capitalize the first letter.
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //Join all the elements of the array back into a string 
    //using a blankspace as a separator 
    const keyName = arr.join(" ");
    // console.log(keyName);

    return keyName;
}


export const getFileExtension = (filename : any): string => {
  return filename.substring(filename.lastIndexOf('.') +1, filename.length) || filename;
}
