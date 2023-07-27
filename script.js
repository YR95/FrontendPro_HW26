let marvelHeroes = [
  {
    name: "Thor"
  },
  {
    name: "Spider Man"
  }
];

let dcHeroes = [
  {
    name: "Superman"
  },
  {
    name: "Batman"
  },
  {
    name: "Deadpool"
  }
];

Array.prototype.heroesRender = function (param) {
  const names = []
  const namesPath = []
  this.forEach(function (value, index) {
    names.push(value.name);
    namesPath.push(reform(value.name));
  });

  function reform(el) {
    el = el.replaceAll(" ", "").trim().toLowerCase() + ".svg";
    return el;
  }

  function render(masName, masLinks) {
    let str = '';
    let mas = [];
    for (let i = 0; i < masName.length; i++) {

      str = `<td style="padding: 10px 10px"><p>${masName[i]}</p></td>
      <td style="10px 10px"><img  style="width: 30px" src="${param}/${masLinks[i]}"></td>`

      mas.push(`<tr>${str}</tr>`);
    }
    console.log(mas);
    return mas;
  }

  document.write(`<table style="padding: 20px ; width: 200px">
                        <tr>
                          <th>Name</th>
                          <th>Icon</th>
                        </tr>
                        ${render(names, namesPath).join(" ")}
			        </table>`)
}
marvelHeroes.heroesRender('marvel');
dcHeroes.heroesRender('dc');

