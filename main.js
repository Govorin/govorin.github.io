let teams = []

function buildTable(teams) {
  const currentDiv = document.getElementById('table')
  currentDiv.innerHTML = ''

  const table = document.createElement('table')
  const tableHead = document.createElement('tr')

  // make headings

  const tableInfo = ['', 'Команда', 'М', 'В', 'Н', 'П', 'Заб', 'Проп', 'О']

  tableInfo.forEach(info => {
    const tableHeadNode = document.createElement('th')
    tableHeadNode.appendChild(document.createTextNode(info))
    tableHead.appendChild(tableHeadNode)
  })

  table.appendChild(tableHead)

  // make body
  teams.map(team => {
    let tableRow = document.createElement('tr')
    let color;
    if (team.color === '1') {
      color = 'green'
    }
    else if (team.color === '2') {
      color = 'light-green'
    }
    else if (team.color === '4') {
      color = 'red'
    }
    tableRow.innerHTML = `
			<td class="${color}">${team.place}</td>
			<td><img src="Italy.png"><a href="${team.tag_url}" target="_blank">${team.name}</a></td>
			<td>${team.matches}</td>
			<td>${team.win}</td>
			<td>${team.draw}</td>
			<td>${team.lose}</td>
			<td>${team.goals}</td>
			<td>${team.conceded_goals}</td>
			<td>${team.score}</td>
		`
    table.appendChild(tableRow)
  })
  currentDiv.appendChild(table)
  const tableLegend = document.createElement('span')
  tableLegend.innerHTML = '<b>М</b> – матчи, <b>В</b> – выигрыши, <b>Н</b> – ничьи, <b>П</b> – проигрыши, <b>Заб</b> – забитые голы, <b>Проп</b> – пропущенные голы, <b>О</b> – очки в турнире'
  currentDiv.appendChild(tableLegend)
}

fetch('seriea.json', {method: 'get'})
  .then(response => response.json())
  .then(store => {
    teams = store.teams
    buildTable(store.teams)
  })
  .catch(err => console.log(err))