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

(async () => {
  await spawnCommand('git', 'init')
  await spawnCommand('git', 'add', __filename, 'package.json', 'package-lock.json', '.gitignore')
  await spawnCommand('git', 'commit', '-m', '"Initial import"')
})()
