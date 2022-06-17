export default function todayStringDateFormat() {
    const today = new window.Date(); 
    let dd = today.getDate(); 
    let mm = today.getMonth() + 1;
    const year = today.getFullYear();
  
    if (dd < 10) {
      dd = '0' + dd; 
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
  
    return `${mm}-${dd}-${year}`;
  
  }; 