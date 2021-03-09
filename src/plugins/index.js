
import { Button } from 'vant';
import { Icon } from 'vant';
import { NavBar  } from 'vant';
import { Tabbar  } from 'vant';
import { TabbarItem  } from 'vant';
import { Field } from 'vant';



const comArr=[Button,Icon,NavBar,Tabbar,TabbarItem,Field ];

export default {
    install: (app) => {
        comArr.forEach(item=>{
            app.component( [item.name],item)
        })
 
    }
  }

