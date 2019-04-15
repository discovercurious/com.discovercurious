// import Vue from 'vue';
// import TypeMate from 'typemate';

export default async({ app }) => {
    //const tm = new TypeMate(undefined, { selector: 'h2, h3, p' });

    app.router.afterEach((to, from) => {
        // Vue.nextTick(function() {
        //     // Code that will run only after the
        //     // entire view has been re-rendered
        //     const tm = new TypeMate(undefined, { selector: 'h2, h3, p' });
        //     tm.apply();
        //      
        // })
    });

}