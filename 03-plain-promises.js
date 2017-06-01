const { spawn } = require('child_process')

function spawnCommand (cmd, ...args) {
  return new Promise((resolve, reject) => {
    spawn(cmd, args)
    .on('close', (code) => {
      console.log(`${cmd} ${args.join(' ')} completed with exit code ${code}`)
      resolve(code)
    })
    .on('error', reject)
  })
}

spawnCommand('git', 'init')
  .then(() => spawnCommand('git', 'add', __filename, 'package.json', 'package-lock.json', '.gitignore'))
  .then(() => spawnCommand('git', 'commit', '-m', '"Initial import"'))
