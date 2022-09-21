
const sr = ScrollReveal ({
    distance: `40px`,
    duration: 2600,
    reset: true
})

sr.reveal(`.text`,{delay:300, origin: `left` })

// SocialLinks
const LinksSocialMedia = {
    github: 'ApenasEsdras',
    youtube: 'UCrnSDklw5W1jTxv7zT2h6DQ',
    facebook: 'ApenasEsdrasOfc',
    instagram: 'apenasesdras',
    twitter: 'apenasEsdras'
  }

  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    }
  }

//   Sobre min
