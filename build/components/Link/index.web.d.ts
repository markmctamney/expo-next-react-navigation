import React from 'react';
import { Text, View } from 'react-native';
/**
 * Link component for react-navigation and nextjs.
 *
 * @param props
 *  - routeName: string
 *  - params?: object
 *  - web?: `{ path?: string; as?: string, replace?: boolean, scroll?: boolean, prefetch?: boolean }`
 *
 * ## Usage
 *
 * ```diff
 * -import { TouchableOpacity } from 'react-native'
 * -...
 * -<TouchableOpacity onPress={() => navigate({ routeName: 'home' })}>
 * -  Press me!
 * - </TouchableOpacity>
 *
 * +import { Link } from 'expo-next-react-navigation'
 * + ...
 * +<Link routeName="home">
 * +  Press me!
 * +</Link>
 *```
 *
 */
declare const Link: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<Text | View>>;
export default Link;
