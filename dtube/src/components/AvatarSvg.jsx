import React from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer';

const AvatarSvg = createAvatar(style, { seed: (Date.now()).toString() });

export default AvatarSvg