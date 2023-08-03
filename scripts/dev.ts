import pmex from 'pmex';

pmex({
  npm: `install && npm prune`,
  pnpm: `install --fix-lockfile`,
  yarn: `install --check-files`,
});

pmex('expo install --fix');

pmex(`expo start -c`);
