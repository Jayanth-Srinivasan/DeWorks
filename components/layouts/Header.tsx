import Link from "next/link";
import React from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NAVBAR_NAVIGATION } from "@/constants/navigation";
import Image from "next/image";

function Header() {
    return (
        <nav className="px-4 md:p-0 sticky top-0 z-50 flex items-center h-[5rem] bg-app-grey-dark justify-between md:px-16  lg:mx-auto">
            <Link href={"/"}>
                <h1 className="text-2xl font-semibold">DeWorks</h1>
            </Link>
            <div className="font-normal">
                <ul className=" lg:flex lg:gap-4 text-center text-md xl:text-lg items-center hidden">
                    {NAVBAR_NAVIGATION.map((link) => (
                        <li key={`nav-desktop-link-${link.link}`} className="">
                            <Button
                                variant={"secondary"}
                                asChild
                                className="rounded border-0 transition-colors hover:bg-app-grey-light h-12 duration-300 ease-in-out"
                            >
                                <Link href={link.link} target={link.target}>
                                    {link.title}
                                </Link>
                            </Button>
                        </li>
                    ))}
                    <li>
                        <ConnectButton.Custom>
                            {({
                                account,
                                chain,
                                openAccountModal,
                                openChainModal,
                                openConnectModal,
                                authenticationStatus,
                                mounted,
                            }: any) => {
                                const ready =
                                    mounted &&
                                    authenticationStatus !== "loading";
                                const connected =
                                    ready &&
                                    account &&
                                    chain &&
                                    (!authenticationStatus ||
                                        authenticationStatus ===
                                            "authenticated");

                                return (
                                    <div
                                        {...(!ready && {
                                            "aria-hidden": true,
                                            style: {
                                                opacity: 0,
                                                pointerEvents: "none",
                                                userSelect: "none",
                                            },
                                        })}
                                    >
                                        {(() => {
                                            if (!connected) {
                                                return (
                                                    <Button
                                                        className="h-12"
                                                        onClick={
                                                            openConnectModal
                                                        }
                                                        type="button"
                                                    >
                                                        Connect Wallet
                                                    </Button>
                                                );
                                            }

                                            if (chain.unsupported) {
                                                return (
                                                    <button
                                                        onClick={openChainModal}
                                                        type="button"
                                                    >
                                                        Wrong network
                                                    </button>
                                                );
                                            }

                                            return (
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        gap: 12,
                                                    }}
                                                >
                                                    <Button
                                                    variant={"secondary"}
                                                    className="h-12 hover:bg-app-grey-light hover:border-app-grey-light"
                                                        onClick={openChainModal}
                                                        style={{
                                                            display: "flex",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                        type="button"
                                                    >
                                                        {chain.hasIcon && (
                                                            <div
                                                                style={{
                                                                    background:
                                                                        chain.iconBackground,
                                                                    width: 12,
                                                                    height: 12,
                                                                    borderRadius: 999,
                                                                    overflow:
                                                                        "hidden",
                                                                    marginRight: 4,
                                                                }}
                                                            >
                                                                {chain.iconUrl && (
                                                                    <Image
                                                                        className=""
                                                                        width={
                                                                            100
                                                                        }
                                                                        height={
                                                                            100
                                                                        }
                                                                        alt={
                                                                            chain.name ??
                                                                            "Chain icon"
                                                                        }
                                                                        src={
                                                                            chain.iconUrl
                                                                        }
                                                                        style={{
                                                                            width: 12,
                                                                            height: 12,
                                                                        }}
                                                                    />
                                                                )}
                                                            </div>
                                                        )}
                                                        {chain.name}
                                                    </Button>

                                                    <Button
                                                        className="h-12"
                                                        onClick={
                                                            openAccountModal
                                                        }
                                                        type="button"
                                                    >
                                                        {account.displayName}
                                                        {account.displayBalance
                                                            ? ` (${account.displayBalance})`
                                                            : ""}
                                                    </Button>
                                                </div>
                                            );
                                        })()}
                                    </div>
                                );
                            }}
                        </ConnectButton.Custom>
                    </li>
                </ul>
            </div>
            <div className="lg:hidden">
                <Sheet>
                    <SheetTrigger className="lg:hidden py-4">
                        <Menu strokeWidth={1.5} size={24} />
                    </SheetTrigger>
                    <SheetContent className="bg-app-grey-dark">
                        <SheetHeader>
                            <SheetTitle className="text-2xl font-semibold text-white">
                                DeWorks
                            </SheetTitle>
                            <SheetDescription>
                                <nav className="contents font-semibold ">
                                    <ul className="mx-auto flex flex-col items-center ">
                                        {NAVBAR_NAVIGATION.map((link) => (
                                            <li
                                                key={`nav-mobile-link-${link.link}`}
                                                className="p-2"
                                            >
                                                <Button
                                                    variant={"secondary"}
                                                    asChild
                                                    className="rounded border-0 transition-colors hover:bg-app-grey-light h-12 duration-300 ease-in-out"
                                                >
                                                    <Link
                                                        href={link.link}
                                                        target={link.target}
                                                    >
                                                        {link.title}
                                                    </Link>
                                                </Button>
                                            </li>
                                        ))}
                                        <li>
                                            <ConnectButton.Custom>
                                                {({
                                                    account,
                                                    chain,
                                                    openAccountModal,
                                                    openChainModal,
                                                    openConnectModal,
                                                    authenticationStatus,
                                                    mounted,
                                                }: any) => {
                                                    const ready =
                                                        mounted &&
                                                        authenticationStatus !==
                                                            "loading";
                                                    const connected =
                                                        ready &&
                                                        account &&
                                                        chain &&
                                                        (!authenticationStatus ||
                                                            authenticationStatus ===
                                                                "authenticated");

                                                    return (
                                                        <div
                                                            {...(!ready && {
                                                                "aria-hidden":
                                                                    true,
                                                                style: {
                                                                    opacity: 0,
                                                                    pointerEvents:
                                                                        "none",
                                                                    userSelect:
                                                                        "none",
                                                                },
                                                            })}
                                                        >
                                                            {(() => {
                                                                if (
                                                                    !connected
                                                                ) {
                                                                    return (
                                                                        <Button
                                                                        
                                                                            className="h-12"
                                                                            onClick={
                                                                                openConnectModal
                                                                            }
                                                                            type="button"
                                                                        >
                                                                            Connect
                                                                            Wallet
                                                                        </Button>
                                                                    );
                                                                }

                                                                if (
                                                                    chain.unsupported
                                                                ) {
                                                                    return (
                                                                        <Button
                                                                        className="h-12"
                                                                            onClick={
                                                                                openChainModal
                                                                            }
                                                                            type="button"
                                                                        >
                                                                            Wrong
                                                                            network
                                                                        </Button>
                                                                    );
                                                                }

                                                                return (
                                                                    <div
                                                                        className="flex flex-col gap-4"
                                                                    >
                                                                        <Button
                                                                            variant={
                                                                                "outline"
                                                                            }
                                                                            className="h-12 hover:bg-app-grey-light hover:border-app-grey-light"
                                                                            onClick={
                                                                                openChainModal
                                                                            }
                                                                            style={{
                                                                                display:
                                                                                    "flex",
                                                                                alignItems:
                                                                                    "center",
                                                                            }}
                                                                            type="button"
                                                                        >
                                                                            {chain.hasIcon && (
                                                                                <div
                                                                                    style={{
                                                                                        background:
                                                                                            chain.iconBackground,
                                                                                        width: 12,
                                                                                        height: 12,
                                                                                        borderRadius: 999,
                                                                                        overflow:
                                                                                            "hidden",
                                                                                        marginRight: 4,
                                                                                    }}
                                                                                >
                                                                                    {chain.iconUrl && (
                                                                                        <Image
                                                                                            className=""
                                                                                            width={
                                                                                                100
                                                                                            }
                                                                                            height={
                                                                                                100
                                                                                            }
                                                                                            alt={
                                                                                                chain.name ??
                                                                                                "Chain icon"
                                                                                            }
                                                                                            src={
                                                                                                chain.iconUrl
                                                                                            }
                                                                                            style={{
                                                                                                width: 12,
                                                                                                height: 12,
                                                                                            }}
                                                                                        />
                                                                                    )}
                                                                                </div>
                                                                            )}
                                                                            {
                                                                                chain.name
                                                                            }
                                                                        </Button>

                                                                        <Button
                                                                        className="h-12"
                                                                            onClick={
                                                                                openAccountModal
                                                                            }
                                                                            type="button"
                                                                        >
                                                                            {
                                                                                account.displayName
                                                                            }
                                                                            {account.displayBalance
                                                                                ? ` (${account.displayBalance})`
                                                                                : ""}
                                                                        </Button>
                                                                    </div>
                                                                );
                                                            })()}
                                                        </div>
                                                    );
                                                }}
                                            </ConnectButton.Custom>
                                        </li>
                                    </ul>
                                </nav>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}

export default Header;
