function openTab(index){
  const tabs = document.querySelectorAll('.tab-content');
  const btns = document.querySelectorAll('.tab-btn');

  tabs.forEach(t => t.classList.remove('active'));
  btns.forEach(b => b.classList.remove('active'));

  tabs[index].classList.add('active');
  btns[index].classList.add('active');
}