import React from 'react'
import { Avatar, Image } from 'antd';

export default function Headshot() {
    return (
        <> <Avatar
            src={
                <Image
                    src="https://joeschmoe.io/api/v1/random"
                    style={{
                        width: 32,
                    }}
                />
            }
        /></>
    )
}
