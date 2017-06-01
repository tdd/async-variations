const { series } = require('async')
const { spawn } = require('child_process')

function spawnCommand (cmd, ...args) {
  const cb = typeof args[args.length - 1] === 'function' ? args.pop() : null
  spawn(cmd, args).on('close', (code) => {
    console.log(`${cmd} ${args.join(' ')} completed with exit code ${code}`)
    cb && cb(code)
  })
}

series([
  (cb) => spawnCommand('git', 'init', cb),
  (cb) => spawnCommand('git', 'add', __filename, 'package.json', 'package-lock.json', '.gitignore', cb),
  (cb) => spawnCommand('git', 'commit', '-m', '"Initial import"', cb)
])
