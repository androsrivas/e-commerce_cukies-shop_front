import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link, useLocation } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";
import { RiHome2Line } from "react-icons/ri";
import React from "react";

const AdminBreadcrumb = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split("/").filter(segment => segment !== "");

    const breadcrumbs = pathSegments.map((segment, index) => {
        const path = "/" + pathSegments.slice(0, index + 1).join("/");
        let displayName = segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, l => l.toUpperCase());

            if (segment === "admin") {
                displayName = <RiHome2Line className="h-5 w-5"/>;
            }

            return { path, displayName };
    });

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink to=""></BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbs.length > 1 && 
                    breadcrumbs.slice(0).map((breadcrumb, index) => (
                    <React.Fragment key={index}>
                        <BreadcrumbItem>
                            {index === breadcrumbs.length - 1 ? (
                                <BreadcrumbPage>{breadcrumb.displayName}</BreadcrumbPage>
                            ) : (
                                <BreadcrumbLink to={breadcrumb.path}>{breadcrumb.displayName}</BreadcrumbLink>
                            )}
                        </BreadcrumbItem>
                        {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
};

export default AdminBreadcrumb;