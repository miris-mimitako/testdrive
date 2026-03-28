import { spawn } from 'node:child_process';

const child = spawn('npm', ['--prefix', 'api', 'run', 'start:dev'], {
  stdio: 'inherit',
  env: {
    ...process.env,
    PORT: '3001',
  },
  shell: false,
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
