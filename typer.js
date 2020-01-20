const typeOut = (target, speed = 100) => {
  const characters = target.textContent.split('')
  characters[0] = characters[0].replace(/\n/, '')
	/**
	 * The cursor element
	 * @type {HTMLElement}
	 */
  const cursor = document.createElement('span')
  cursor.id = 'typeout-cursor'
  cursor.innerHTML = '&nbsp;'
  cursor.style.borderLeft = '2px solid white'

  target.innerText = ''

  target.appendChild(cursor)

  for (let index = 0; index < characters.length; index++) {

    // Replace new lines with BR element
    characters[index] = characters[index].replace(/\n/, '<br />')

    setTimeout(() => {

      target.removeChild(cursor)

      // Append the character to the container
      target.innerHTML += characters[index]

      // Add the cursor
      target.appendChild(cursor)

      // If we have reached the end, remove the cursor
      if (index === characters.length - 1) {
        target.removeChild(cursor)
      }
    }, speed * index)

  }

}
