import Breadcrumb from '../components/Breadcrumb';
import TableThree from '../components/TableThree';
const Products = () => {
    return (
        <>
            <Breadcrumb pageName="Tables" />
            <div className="flex flex-col gap-10">
                <TableThree />
            </div>
        </>
    );
};

export default Products;
