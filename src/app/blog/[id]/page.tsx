type Props = {
    params: {
        id: number;
    };
};

import React from "react";

const page = ({ params }: Props) => {
    return <div>blog id:{params.id}</div>;
};

export default page;
