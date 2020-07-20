import { IToolItemProps } from '@scripts/types'

import { createImage } from '@scripts/utils'

export default [
  {
    name: 'tmux',
    src: createImage({ text: 'tmux' }),
    url: 'https://github.com/tmux/tmux',
  },
  {
    name: 'oh-my-zsh',
    src: 'https://ohmyz.sh/img/OMZLogo_BnW.png',
    url: 'https://ohmyz.sh/',
  },
  {
    name: 'autojump',
    src: createImage({ text: 'autojump' }),
    url: 'https://github.com/wting/autojump',
  },
  {
    name: 'rmtrash',
    src: createImage({ text: 'rmtrash' }),
    url: 'https://github.com/PhrozenByte/rmtrash',
  },
  {
    name: 'mycli',
    src: createImage({ text: 'mycli' }),
    url: 'https://github.com/dbcli/mycli',
  },
  {
    name: 'colorls',
    src: createImage({ text: 'colorls' }),
    url: 'https://github.com/athityakumar/colorls',
  },
  {
    name: 'zsh-autosuggestions',
    src: createImage({ text: 'zsh-autosuggestions' }),
    url: 'https://github.com/zsh-users/zsh-autosuggestions',
  },
  {
    name: 'powerlevel10k',
    src:
      'https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/prompt-styles-high-contrast.png',
    url: 'https://github.com/romkatv/powerlevel10k',
  },
  {
    name: 'Homebrew',
    src: 'https://brew.sh/assets/img/homebrew-256x256.png',
    url: 'https://brew.sh/',
  },
  {
    name: 'mas',
    src: 'https://raw.githubusercontent.com/mas-cli/mas/master/mas-cli.png',
    url: 'https://github.com/mas-cli/mas',
  },
] as IToolItemProps[]
