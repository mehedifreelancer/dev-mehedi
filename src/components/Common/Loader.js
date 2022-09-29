function Loader({loader}) {
    return ( 

        <>
            <section className={`loader ${loader === 'on' ? '':'loaderEnd'}`}>
                <img src={require('../../img/loader.gif')} />
            </section>
        </>
     );
}

export default Loader;