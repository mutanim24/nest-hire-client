import React from 'react';
import {
    Badge,
    Button,
    Card,
    PlayButton,
    Progress
} from "keep-react";
import {
    ArrowsOutSimple,
    Bed,
    Heart,
    MapPinLine,
    Play,
    Rows,
    ShoppingCart,
    Shower,
    SkipBack,
    SkipForward,
    SpeakerHigh,
    Users,
    ShieldCheck,
    X
} from "phosphor-react";

const HouseCard = ({ house }) => {
    return (
        <div>
            <Card
                className="max-w-xs overflow-hidden rounded-md"
                imgSrc={house.image}
                imgSize="md">
                <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-metal-50/50">
                    <Heart size={20} weight="bold" color="white" />
                </Card.Container>
                <Card.Container className="space-y-4 p-6">
                    <Card.Title className="flex items-center gap-2 text-body-5 font-bold text-black md:!text-body-4">
                        <span>{house.name}</span>
                    </Card.Title>
                    <Card.Title className="flex items-center gap-2 text-body-5 font-medium text-metal-500 md:!text-body-4">
                        <MapPinLine size={20} color="#5E718D" />
                        <span>{house.city}</span>
                    </Card.Title>
                    <Card.Container className="flex items-center justify-between">
                        <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                            <Bed size={20} color="#5E718D" />
                            <span>{house.bedrooms} Bedrooms</span>
                        </Card.Title>
                        <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                            <Shower size={20} color="#5E718D" />
                            <span>{house.bathrooms} Bathrooms</span>
                        </Card.Title>
                    </Card.Container>
                    <Card.Container className="flex items-center justify-between">
                        <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                            <ArrowsOutSimple size={20} color="#5E718D" />
                            <span>{house.room_size}</span>
                        </Card.Title>
                        {
                            house.availability == "Available" ?
                                <>
                                    <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                                        <ShieldCheck size={20} color="#5E718D" weight="fill" />
                                        <span>{house.availability}</span>
                                    </Card.Title>
                                </> :
                                <>
                                    <Card.Title className="flex items-center gap-2 !text-body-5 font-medium text-metal-500">
                                        <X size={20} color="#5E718D" weight="fill" />
                                        <span>{house.availability}</span>
                                    </Card.Title>
                                </>
                        }
                    </Card.Container>
                    <Card.Container className="my-3 flex items-center justify-between">
                        <Button type="primary" size="sm">
                            View Details
                        </Button>
                        <Card.Title className="text-body-3 font-medium text-metal-500">{house.rent_per_month}</Card.Title>
                    </Card.Container>
                </Card.Container>
            </Card>
        </div>
    );
};

export default HouseCard;