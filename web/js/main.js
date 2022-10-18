
/**
 * Les filtres du programme.
 */
['date','commune'].forEach((filterName)=>{
  const filtre = document.getElementById(`filtre-${filterName}`);
  const els = document.querySelectorAll(`.carte[data-${filterName}]`);
  const onChange = ()=>{
    const val = filtre.value;
    els.forEach((el) => {
      const visible = val === "all"  || el.dataset[filterName].indexOf(val) != -1;
      el.style.display = visible ? "block" : "none";
    });
  }
  filtre.addEventListener("change", onChange);
  // Appel au chargement.
  onChange();
});
