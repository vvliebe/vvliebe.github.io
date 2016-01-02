/**
 * Created by vvliebe on 15/12/24.
 */

let links = [
    {
        title: 'jadegong',
        link: 'http://www.jadegong.com.cn/',
        labels: ['前端']
    },
    {
        title: 'jl',
        link: 'http://jlxy.cz/',
        labels: ['前端']
    },
    {
        title: 'neverland',
        link: 'http://www.neverl.com/blog/',
        labels: ['前端']
    },
    {
        title: 'norgerman',
        link: 'https://www.norgerman.com/',
        labels: ['后端']
    },
    {
        title: 'Renfei Song',
        link: 'http://www.renfei.org/',
        labels: ['全栈']
    },
    {
        title: 'sunxfancy',
        link: 'http://sunxfancy.github.io/',
        labels: ['编译器']
    },
    {
        title: 'szm',
        link: 'http://blog.szm.me/',
        labels: ['操作系统']
    },
    {
        title: 'vincentbel',
        link: 'http://www.vincentbel.com/',
        labels: ['全栈']
    },
    {
        title: 'Orange',
        link: 'http://www.orangecpp.com/',
        labels: ['Android']
    },
    {
        title: 'wanzy',
        link: 'http://wanzy.me/',
        labels: ['软件开发']
    },
    {
        title: 'WunGCQ',
        link: 'http://wcqblog.github.io/',
        labels: ['前端']
    },
    {
        title: 'zstao',
        link: 'http://zstao.tk/',
        labels: ['前端']
    },
    {
        title: 'lightAfire',
        link: 'http://lightafire.github.io/blog/',
        labels: ['前端']
    },
    {
        title: 'rocxing',
        link: 'http://rocxing.github.io/',
        labels: ['python']
    },
    {
        title: 'Jeffrey Wang',
        link: 'http://wjfwzzc.tk/',
        labels: ['算法']
    },
    {
        title: 'lp1995',
        link: 'http://www.dododo95.com/',
        labels: ['前端']
    }
];

links.sort((a, b) => {
    return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1;
});


export default links;