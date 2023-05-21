window.onload = function () {
  // 페이지 로딩이 끝난 후 에디터(input) 요소를 숨김
  const editorElements = document.querySelectorAll('.editor');
  editorElements.forEach((editorElement) => {
    editorElement.style.display = 'none';
  });
};

// 모든 텍스트(span) 요소를 찾음
const textElements = document.querySelectorAll('.text');

textElements.forEach((textElement) => {
  // 클릭 시 에디터(input)를 표시
  textElement.addEventListener('click', function () {
    this.style.display = 'none';
    this.nextElementSibling.style.display = 'block';
    this.nextElementSibling.focus();
  });
});

// 모든 에디터(input) 요소를 찾음
const editorElements = document.querySelectorAll('.editor');

editorElements.forEach((editorElement) => {
  // 에디터에서 포커스가 사라질 때 텍스트를 업데이트하고 에디터를 숨김
  editorElement.addEventListener('blur', function () {
    this.previousElementSibling.innerHTML = this.value;
    this.style.display = 'none';
    this.previousElementSibling.style.display = 'block';
  });
});
