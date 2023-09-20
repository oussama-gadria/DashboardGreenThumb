import Breadcrumb from '../components/Breadcrumb';
import TableOne from '../components/TableOne';
const Users = () => {
    return (
        <>
            <Breadcrumb pageName="Tables" />
            <div className="flex flex-col gap-10">
                <TableOne />
            </div>
        </>
    );
};

export default Users;
