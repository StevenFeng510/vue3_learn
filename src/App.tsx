import { divide } from 'lodash';
import { ref } from 'vue';

let v = ref<string>('');

let flag = ref<boolean>(false);

let Arr = [1, 2, 3, 4];

type Props = {
    title: string;
};

const renderDom = (props: Props, ctx: any) => {
    return (
        <div>
            {/* tsx写法下的props传参 */}
            <div>{props.title}</div>

            {/* v-model用法 */}
            <input v-model={v.value} type="text" />
            <div>{v.value}</div>

            {/* v-show用法 */}
            <div v-show={flag}>惊天</div>
            <div v-show={!flag}>雪天</div>

            {/* 不支持v-if,但可以用表达式  */}
            {flag ? <div>景天</div> : <div>雪地</div>}

            {/* 不支持v-for */}
            {Arr.map((v) => {
                return (
                    <div onClick={clickTap.bind(this, ctx)} data-index={v}>
                        ${v}
                    </div>
                );
            })}
        </div>
    );
};

const clickTap = (ctx: any) => {
    // console.log('我被点了', v);

    ctx.emit('on-click', 123);
};

export default renderDom;
