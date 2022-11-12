
/**
 * Récup des filtres au chargement
 */
const hash = window.location.hash.substring(1).split("|");
let urlParams = new URLSearchParams();
if(hash.length > 1){
  urlParams = new URLSearchParams(hash[1]);
  window.location.hash = "#" + hash[0];
}

/**
 * Les filtres du programme.
 */
['date','commune','salle','type'].forEach((filterName)=>{
  const filtre = document.getElementById(`filtre-${filterName}`);
  const els = document.querySelectorAll(`.carte[data-${filterName}]`);
  const onChange = (...args)=>{
    const val = filtre.value;
    els.forEach((el) => {
      const visible = val === "all"  || el.dataset[filterName].indexOf(val) != -1;
      el.style.display = visible ? "block" : "none";
    });
    // Lorsque le changement est effectué par l'utilisateur
    if(args.length){
      // récup de l'ancre s'il en est une
      const hashTab = window.location.hash.substring(1).split("|");
      const anchor = hashTab.length ? hashTab[0] : "";
      // mise à jour des paramètres de filtrage
      urlParams.set(filterName, val);
      window.location.hash = "#" + anchor + "|" + urlParams.toString();
    }
  }
  filtre.addEventListener("change", onChange);
  // Si on a des paramètres de filtrages passés dans le hash de l'url
  // on met à jour les filtres.
  const val = urlParams.get(filterName);
  if(val){
    filtre.value = val;
  }
  // Appel au chargement.
  onChange();
});


