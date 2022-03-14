let border = document.getElementById('border');

let bigBorder = () => {
    border.style.border = '3px solid #D3D3D3';
};

let yesBorder = () => {
    border.style.border = '1px solid #D3D3D3';
};


border.addEventListener('mouseover', bigBorder);
border.addEventListener('mouseout', yesBorder);