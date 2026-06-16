function nav() {
    let result = "";

    for(let i = 1; i <= 10; i++) {

        result += `
            <a href=" Home ${i}.html" style="text-decoration:none;">
               <span style="color:black; margin-left:72px; font-size:20px; font-family:Bell MT ;" > Pages_${i}  </span>
            </a>
        `;
    }	
    return result;
}

